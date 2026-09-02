import React, { Component } from "react";
import styled from "styled-components";

const Section = styled.div`
font-family: sans-serif;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const List = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
gap: 30px;
margin-bottom: 10px;
font-size: 20px;
`;

const Button = styled.button`
width: 120px;
height: 40px;
border-radius: 10px;
border: none;
background-color: red;
color: white;
font-size: 20px;
cursor: pointer;
`;

class TaskList extends Component {
  static tasks = [
    { id: 1, text: "task1" },
    { id: 2, text: "task2" },
    { id: 3, text: "task3" },
  ];

  addTask() {
    const task = prompt("Enter a task:");

    if (task) {
      TaskList.tasks.push({
        id: TaskList.tasks.length + 1,
        text: task,
      });

      this.forceUpdate();
    }
  }

  deleteTask(id) {
    TaskList.tasks = TaskList.tasks.filter(
      (task) => task.id !== id
    );

    this.forceUpdate();
  }

  render() {
    return (
      <Section>
        <h1>Task List</h1>

        <Button onClick={() => this.addTask()}>
          Add Task
        </Button>

        <ul>
          {TaskList.tasks.map((task) => (
            <List key={task.id}>
              {task.text}
              <Button onClick={() => this.deleteTask(task.id)}>
                Delete
              </Button>
            </List>
          ))}
        </ul>
      </Section>
    );
  }
}

export default TaskList
