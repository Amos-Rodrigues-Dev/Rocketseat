import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log('Setup')

    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
}

/* Fluxo do Link */

// no diretorio src/prisma/vitest-environment-prisma: executar npm link no terminal
// no diretorio da aplicação: executar npm link vitest-environment-prisma
