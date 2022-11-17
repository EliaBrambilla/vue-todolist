/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/
const app = new Vue({
    el: "#root",
    data: {
      arrTodos: [
        {
          text: "comprare il pane",
          done: false,
        },
        {
          text: "pulire casa",
          done: true,
        },
        {
          text: "fare la spesa",
          done: false,
        },
      ],
  
      // newObjTodo: {
      //   text: '',
      //   done: true,
      // },
  
      text: "",
    },
    methods: {
      addTodo() {
        if (this.text.trim()) {
          this.arrTodos.push({
            // ...this.newObjTodo,
            text: this.text.trim(),
            done: false,
            // per pushare una 'copia' dell'oggetto creato si crea una sintassi ad oggetto con la tonda e la quadra e poi all'interno si ridichiara ciò che vogliamo venga inserito nell'array sottoforma di oggetto. Oppure come ho commentato sopra si crea un oggetto con all'interno le stesse proprietà e lo si fa "esplodere" così che venga creata una copia di quell'oggetto e pushato nell'arrai da noi selezionato
          });
        }
        this.text = "";
        // this.newObjTodo.text = "";
        // console.log(this.arrTodos);
      },
  
      deleteTodo(index) {
        this.arrTodos.splice(index, 1);
      },
  
      // Ricordarsi che quando dobbiamo accedere ad una determinata proprietà allinterno di un oggetto, che però è, a sua volta, all'interno di un array si deve sempre specificare la posizione di quell'oggetto, altrimenti non saremo in gradi di accedere alle sue chiavi. In questo caso abbiamo messo come argomento l'index che poi lo darà la funzione/ metodo richiamato in HTML con Vue prendedolo dal ciclo for che abbiamo fatto sulo stesso elemento e così gli dirà la posizione.
      changeStatus(index) {
        console.log(this.arrTodos);
        if (this.arrTodos[index].done) {
          this.arrTodos[index].done = false;
        } else {
          this.arrTodos[index].done = true;
        }
      },
    },
  });