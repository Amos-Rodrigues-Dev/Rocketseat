import http from 'node:http';

import { json } from './middlewares/json.js';
import { routes } from './routes.js';

// UUID => Universal Unique ID

// Statefull - guarda estado
// Stateless - não guarda estado

// - HTTP
//    - Método HTTP
//    - URL - recurso

// Cabeçalhos (requisição/resposta) => metadados

// Query Parameters (Parametros nomeados): URL Stateful => filtros, paginações, não-obrigatórias
// ex: http://localhost:3333/users?userId=1&name=Amos

// Route Parameters (Parâmetros não nomeados): Identificação de recurso
// ex: http://localhost:3333/users/1

// Request Body: Envio de informações de um formulário

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await json(req, res);

  const route = routes.find(
    (route) => route.method === method && route.path.test(url),
  );

  if (route) {
    const routeParams = req.url.match(route.path)

    req.params = {...routeParams.groups}

    return route.handler(req, res);
  }

  return res.writeHead(404).end('Not found');
});

server.listen(3333, () => console.log('Server is running...'));
