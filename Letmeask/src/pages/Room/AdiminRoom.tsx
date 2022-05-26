import { Toaster } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../services/firebase';

import './styles.scss'

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  // const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams<RoomParams>();
  const roomId = params.id;

  const { questions, title } = useRoom(roomId as string);

  async function handleEndRoom() {
    await database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    })

    navigate('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que você deseja encerrar esta sala?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  } 

  async function handleHighlightQuestion(questionId: string, isHighlighted: boolean) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: !isHighlighted,
    })
  } 
  
  return (
    <div id="page-room">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId as string}/>
            <Button onClick={handleEndRoom} isOutlined>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="question-list">
          {questions.map(question => {
            return (
              <Question 
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >

                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() => handleCheckQuestionAsAnswered(question.id)}
                    >
                      <img src={checkImg} alt="Marcar pergunta como respondida" />
                    </button>
    
                    <button
                      type="button"
                      onClick={() => handleHighlightQuestion(question.id, question.isHighlighted)}
                    >
                      <img src={answerImg} alt="Destaque à Pergunta" />
                    </button>
                  </>
                )} 
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover Pergunta" />
                </button>
              </Question>
            );
          })}
        </div>      
      </main>
    </div>
  );
}