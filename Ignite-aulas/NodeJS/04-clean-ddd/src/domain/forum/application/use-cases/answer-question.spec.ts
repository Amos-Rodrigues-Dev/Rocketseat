import { AnswerQuestionUseCase } from './answer-question'
import { expect } from 'vitest'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: AnswerQuestionUseCase

describe('Create an answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new AnswerQuestionUseCase(inMemoryAnswersRepository)
  })

  test('should be able to create an answer', async () => {
    const result = await sut.execute({
      questionId: '1',
      instructorId: '1',
      content: 'Conteúdo da resposta',
    })

    expect(result.isRight()).toBe(true)
    expect(inMemoryAnswersRepository.items[0]).toEqual(result.value?.answer)
  })
})
