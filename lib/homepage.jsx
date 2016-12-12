'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super ();
    this.proChange = this.proChange.bind(this);
    this.conChange = this.conChange.bind(this);
    this.state = {
        pros: [''],
        cons: [''],
    };
  }

  proChange(e) {
    this.state.pros[e.currentTarget.id] = e.currentTarget.value;
    if(this.state.pros[e.currentTarget.id] === '') {
      this.state.pros.splice(e.currentTarget.id, 1);
    }
    else if(e.currentTarget.id == this.state.pros.length - 1) {
      this.state.pros.push('');
    }
    this.forceUpdate();
    }

  conChange(e) {
    this.state.cons[e.currentTarget.id] = e.currentTarget.value;
    if(this.state.cons[e.currentTarget.id] === '') {
      this.state.cons.splice(e.currentTarget.id, 1);
    }
    else if(e.currentTarget.id == this.state.cons.length - 1) {
      this.state.cons.push('');
    }
    this.forceUpdate();
  }

  render(){
    const styles = {
      container: {
        height: '100vh',
        width: '100vw',
        backgroundColor: '#ccc',
        display: 'flex',
      },
      procon: {
        height: '80vh',
        width: '35vw',
        backgroundColor: 'white',
        marginTop: '10vh',
        marginLeft: '10vw',
      },
      logo: {
        height: '10%',
        width: '100%',
        backgroundColor: '#424242',
        color: 'white',
        textAlign: 'center',
        fontSize: '30px',
      },
      listElement: {
        width: '90%',
        marginLeft: '2vw',
      },
    }

    const renderPros = this.state.pros.map((pro, idx) => {
      return (
        <li key={idx} style={styles.listElement}><input id={idx} style={styles.listElement} value={this.state.pros[idx]} onChange={this.proChange}></input></li>
      )
    })

    const renderCons = this.state.cons.map((con, idx) => {
      return (
        <li key={idx} style={styles.listElement}><input id={idx} style={styles.listElement} value={this.state.cons[idx]} onChange={this.conChange}></input></li>
      )
    })

    return (
      <div style={styles.container}>
        <div style={styles.procon}>
          <div style={styles.logo}>Pros</div>
          <ol>
            {renderPros}
          </ol>
        </div>
        <div style={styles.procon}>
          <div style={styles.logo}>Cons</div>
          <ol>
            {renderCons}
          </ol>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />,
		document.getElementById('react-container'));
