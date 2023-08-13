# DDD (Domain-drive Design)

Design dirigido à domínio

## Domínio "área de entendimento do software"

- Domain Experts
  - Conversa
- Linguagem ubíqua

- Usuário
  - Cliente
  - Fornecedor
  - Atendente
  - Barman

- Agregados
- Value Object
- Eventos de domínio
- Subdomínios (Bounded Contexts)
- Entidades
- Casos de uso

# Conceitos

- Aggregate - Agregados 
- WatchedList - Listas observadas

# Subdomínios 

- Core: O que dá dinheiro 
- Supporting: Dá suporte para o core funcionar
- Generic: Você precisa deles mas não são tão importantes

## Exemplos

### Core

- Compra
- Catálogo 
- Pagamento
- Entrega
- Faturamento

### Supporting

- Estoque 

### Generic

- Notificações ao cliente
- Promoções 
- Chat

## Publish/Subscribe