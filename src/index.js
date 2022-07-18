import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const list = [];
const letter = 'y';
//const count = 0;
const wordlist = ['telepathy',
    'allay',
    'alley',
    'ally',
    'apathy',
    'apply',
    'aptly',
    'eely',
    'ethyl',
    'eyelet',
    'eyeteeth',
    'happy',
    'healthy',
    'hype',
    'lately',
    'layette',
    'lethally',
    'palely',
    'papally',
    'papaya',
    'pappy',
    'patly',
    'patty',
    'payee',
    'peaty',
    'peppy',
    'petty',
    'phyla',
    'play',
    'playlet',
    'tally',
    'tatty',
    'teleplay',
    'teletype',
    'they',
    'type',
    'yappy',
    'yeah',
    'yell',
    'yelp']

/*function Square(props) {
    return (
        <button className='square' onClick={props.onClick}>
            {props.value}
        </button>
    );
}*/


class Letter extends React.Component {
    render() {
      return (
        <button className='letter' onClick={this.props.onClick}>
        {this.props.value}
        </button>
      );
    }
  }



  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           // squares: Array(9).fill(null),
            //xIsNext: true,
            word : "",
            message: "",
            count : 0
            //list : []
        };
    }


    handleClick(i){
       // const squares = this.state.squares.slice();
     //   squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            //squares:squares,
    //    xIsNext: !this.state.xIsNext,
        word:this.state.word + i});
    }


 /*   renderSquare(i) {
      return <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}/>;
    }*/
  

    renderLetter(i) {
        return <Letter value={i} 
        onClick={() => this.handleClick(i)}/>;
      }

      enter(i) {
        return <Letter value={i} 
        onClick={() => this.enter1()}/>;
      }


      delete(i) {
        return <Letter value={i} 
        onClick={() => this.delete1()}/>;
      }

      enter1(){
        console.log(this.state.word)
       
        if(this.state.word.length < 4){
            this.setState({message:"needs more letters :/"})
        }
        else if(!this.state.word.includes(letter)){
            this.setState({message:" missing letter :("})
        }
        else if(!wordlist.includes(this.state.word)){
            this.setState({message:"not a word ......"})
        }

        else {
            this.setState({message: 'yasss',
        count: this.state.count + 1})
            list.push(this.state.word + '\n')
          
        }
       
       // list.push(this.state.word + '\n')
        //list.push("/n")
        console.log(list)
        this.setState({
            
          word: ''});
        // list: list2.push(this.state.word)});
        //  list: this.state.list+1});
       // this.setState({list: this.state.list.append(this.state.word)});
    }


      delete1(){

          this.setState({
              
            word: this.state.word.slice(0,-1)});
      }

   
    

    render() {
        const current = this.state.word;
        const mess = this.state.message;
        const lunch = "you have found " + this.state.count + " words"
       // const subway = this.state.list;
    //    const winner = calculateWinner(this.state.squares);
      //  let status;
       // if (winner) {
         //   status = 'Winner: ' + winner + current;
        //}
       // else{
         //   status = "xochella: " + current + (this.state.xIsNext ? 'X': 'O');
        //}
        
        const test = 'horrendous .... '
        
  
      return (
        <div>
            <div className="hmm">{test}</div>
          {/* <div className="status">{status}</div>*/}
          <div className="status">{mess}</div>
          <div className="status">{current}</div>
          <div className="status">{list}</div>
          <div className="border">{lunch}</div>

          <div className="board-row">
          {/*  {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
      {this.renderSquare(8)}*/}

          </div>
          <div className="board-row">
            {this.renderLetter('y')}
            {this.renderLetter('a')}
            {this.renderLetter('e')}
            {this.renderLetter('h')}
            {this.renderLetter('l')}
            {this.renderLetter('p')}
            {this.renderLetter('t')}
            {this.enter('enter')}
            {this.delete('delete')}
          </div>
           
          
        </div>
      );
    }
  }
  
  class Text extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />

   
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }


  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />

   
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  
  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('you suck: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

