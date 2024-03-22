/*
import { useState } from 'react';

function App() {

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [addedTopic, setAddedTopic] = useState([]);
  const [showAgendaBlock, setShowAgendaBlock] = useState(false);
  const [addedAgenda, setAddedAgenda] = useState([
    {
      title: "Web Dev",
      description: "To learn full stack",
      topics: ["HTML", "CSS", "JS"]
    }
  ]);

  const handleChangeFn = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "newTitle") {
      setNewTitle(value);
    } else if (name === "newDescription") {
      setNewDescription(value);
    } else if (name === "newTopic") {
      setNewTopic(value);
    }
  };

  const addedTopicFn = () => {
    setAddedTopic([...addedTopic, newTopic]);
    setNewTopic("");
  };

  const addedAgendaFn = () => {
    const agenda = {
      title: newTitle,
      description: newDescription,
      topics: addedTopic
    };

    setNewTitle("");
    setNewDescription("");
    setNewTopic("");
    setAddedTopic([]);
    setAddedAgenda([...addedAgenda, agenda]);
  };

  const preventSubmit = (e) => {
    e.preventDefault();
  };

  const showAgendaBlockFn = () => {
    setShowAgendaBlock(!showAgendaBlock);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Agenda Maker</h1>
      {!showAgendaBlock &&  
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={showAgendaBlockFn}>
            Click to View Agenda
          </button>
          <form onSubmit={preventSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="newTitle" className="block">Title</label>
              <input
                type='text'
                name='newTitle'
                placeholder='Enter the title'
                className="border px-2 py-1 w-full"
                value={newTitle} onChange={handleChangeFn}/>
              <small>
                  {newTitle.trim().length === 0 ? "Title is required" : ""}
              </small>
            </div>
            <div className="mb-4">
              <label htmlFor="newDescription" className="block">Description</label>
              <input
                type="text"
                name='newDescription'
                placeholder='Enter the Description'
                className="border px-2 py-1 w-full"
                value={newDescription} onChange={handleChangeFn}/>

              <small>
              {newDescription.trim().length === 0 ? "Description is required" : ""}
              </small>
            </div>
            <div className="mb-4">
              <label htmlFor="newTopic" className="block">Enter Topic</label>
              <input type="text"
                name='newTopic'
                placeholder='Enter the Topic'
                className="border px-2 py-1 w-full"
                value={newTopic} onChange={handleChangeFn} />

              <small>
              {newTopic.trim().length === 0 && addedTopic.length === 0 ? "Topic is required" : ""}
              </small>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={addedTopicFn} disabled={newTopic.trim().length === 0}>+ Add Topic</button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addedAgendaFn} disabled={newTitle.trim().length === 0 || newDescription.trim().length === 0 || addedTopic.length === 0}>Submit Agenda</button>
          </form>
          {addedTopic.length === 0 &&
            <div>No Topics Added</div>}
          {addedTopic.length !== 0 &&
            <div className="mt-4">
              <div>Added Topics</div>
              <div>
                <ul>
                  {addedTopic.map((topic, index) => (
                    <li key={index}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div>Refer the topics you added</div>
            </div>
          }
        </div>
      }
      {showAgendaBlock && 
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={showAgendaBlockFn}>Click to Add Agenda</button>
          {addedAgenda.map((agenda, index) => (
            <div key={index} className="mt-4">
              <div>{agenda.title}</div>
              <div>
                <ul>
                  {agenda.topics.map((topic, index) => (
                    <li key={index}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div>{agenda.description}</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;
*/

import { useState } from 'react';

function App() {

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [addedTopic, setAddedTopic] = useState([]);
  const [showAgendaBlock, setShowAgendaBlock] = useState(false);
  const [addedAgenda, setAddedAgenda] = useState([
    {
      title: "Web Dev",
      description: "To learn full stack",
      topics: ["HTML", "CSS", "JS"]
    }
  ]);

  const handleChangeFn = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "newTitle") {
      setNewTitle(value);
    } else if (name === "newDescription") {
      setNewDescription(value);
    } else if (name === "newTopic") {
      setNewTopic(value);
    }
  };

  const addedTopicFn = () => {
    setAddedTopic([...addedTopic, newTopic]);
    setNewTopic("");
  };

  const addedAgendaFn = () => {
    const agenda = {
      title: newTitle,
      description: newDescription,
      topics: addedTopic
    };

    setNewTitle("");
    setNewDescription("");
    setNewTopic("");
    setAddedTopic([]);
    setAddedAgenda([...addedAgenda, agenda]);
  };

  const preventSubmit = (e) => {
    e.preventDefault();
  };

  const showAgendaBlockFn = () => {
    setShowAgendaBlock(!showAgendaBlock);
  };

  return (
    <div>
      <h1>Agenda Maker</h1>
      {!showAgendaBlock &&  
        <div>
          <button onClick={showAgendaBlockFn}>
            Click to View Agenda
          </button>
          <form onSubmit={preventSubmit}>
            <div>
              <label htmlFor="">Title</label>
              <input
                type='text'
                name='newTitle'
                placeholder='Enter the title'
                role='inputTitle'
                value={newTitle} onChange={handleChangeFn}/>
              <small>
                  {newTitle.trim().length === 0 ? "Title is required" : ""}
              </small>
            </div>
            <div>
              <label htmlFor="">Description</label>
              <input
                type="text"
                name='newDescription'
                placeholder='Enter the Description'
                role='inputDescription' 
                value={newDescription} onChange={handleChangeFn}/>

              <small>
              {newDescription.trim().length === 0 ? "Description is required" : ""}
              </small>
            </div>
            <div>
              <label htmlFor="">Enter Topic</label>
              <input type="text"
                name='newTopic'
                placeholder='Enter the Topic' role='inputTopic'
                value={newTopic} onChange={handleChangeFn} />

              <small>
              {newTopic.trim().length === 0 && addedTopic.length === 0 ? "Topic is required" : ""}
              </small>
            </div>
            <button onClick={addedTopicFn} disabled={newTopic.trim().length === 0}>+ Add Topic</button>
            <button onClick={addedAgendaFn} disabled={newTitle.trim().length === 0 || newDescription.trim().length === 0 || addedTopic.length === 0}>Submit Agenda</button>
          </form>
          {addedTopic.length === 0 &&
            <div>No Topics Added</div>}
          {addedTopic.length !== 0 &&
            <div>
              <div>Added Topics</div>
              <div>
                <ul>
                  {addedTopic.map((topic, index) => (
                    <li key={index}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div>Refer the topics you added</div>
            </div>
          }
        </div>
      }
      {showAgendaBlock && 
        <div>
          <button onClick={showAgendaBlockFn}>Click to Add Agenda</button>
          {addedAgenda.map((agenda, index) => (
            <div key={index}>
              <div>{agenda.title}</div>
              <div>
                <ul>
                  {agenda.topics.map((topic, index) => (
                    <li key={index}>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
              <div>{agenda.description}</div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}

export default App;

  