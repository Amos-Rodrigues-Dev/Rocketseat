const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

const PORT = 3333;

app.use(bodyParser.json());

const customers = [];

function verifyIfExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return res.status(400).json({ message: 'Customer not found!' });
  }

  req.customer = customer;

  return next();
}

function getBalance(statement, amount) {
  const balance = statement.reduce((acc, operation) => {
    if (operation.type === 'credit') {
      return (acc = operation.amount + amount);
    } else {
      return (acc = operation.amount - amount);
    }
  }, 0);

  return balance;
}

app.post('/account', (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf,
  );

  if (customerAlreadyExists) {
    return res.status(400).json({ error: 'Customer already exists!' });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return res
    .status(201)
    .json({ message: 'Criado com sucesso!', data: customers });
});

app.get('/statement', verifyIfExistsAccountCPF, (req, res) => {
  const { statement } = req.customer;
  return res.status(200).json({ statement });
});

app.post('/deposit', verifyIfExistsAccountCPF, (req, res) => {
  const { description, amount } = req.body;

  const { customer } = req;

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: 'credit',
  };

  customer.statement.push(statementOperation);

  return res.status(201).send();
});

app.post('/withdraw', verifyIfExistsAccountCPF, (req, res) => {
  const { amount } = req.body;
  const { customer } = req;

  const balance = getBalance(customer.statement, amount);

  if (balance < amount) {
    return res.status(400).json({ error: 'Insufficient funds!' });
  }

  const statementOperation = {
    amount,
    created_at: new Date(),
    type: 'debit',
  };

  customer.statement.push(statementOperation);
  return res.status(201).send();
});

app.listen(PORT, console.log(`Rodando na porta: ${PORT}`));
