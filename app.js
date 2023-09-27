class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            displayValue: '',
            previousValue: null,
            operator: null,
            shouldDisplayResult: false,
        };
    }

    // Fonction pour mettre à jour la valeur affichée
    updateDisplay(value) {
        const { displayValue, shouldDisplayResult } = this.state;
        if (shouldDisplayResult) {
            this.setState({ displayValue: String(value), shouldDisplayResult: false });
        } else {
            this.setState({ displayValue: displayValue + value });
        }
    }

    // Fonction pour gérer les opérations mathématiques
    handleOperation(operator) {
        const { displayValue } = this.state;
        this.setState({
            previousValue: displayValue,
            displayValue: '',
            operator,
            shouldDisplayResult: false,
        });
    }

    // Fonction pour effectuer le calcul
    calculate() {
        const { displayValue, previousValue, operator } = this.state;
        if (previousValue && operator && displayValue !== '') {
            let result;
            switch (operator) {
                case '+':
                    result = parseFloat(previousValue) + parseFloat(displayValue);
                    break;
                case '-':
                    result = parseFloat(previousValue) - parseFloat(displayValue);
                    break;
                case '*':
                    result = parseFloat(previousValue) * parseFloat(displayValue);
                    break;
                case '/':
                    result = parseFloat(previousValue) / parseFloat(displayValue);
                    break;
                default:
                    return;
            }
            this.setState({
                displayValue: String(result),
                previousValue: null,
                operator: null,
                shouldDisplayResult: true,
            });
        }
    }

    // Fonction pour effacer tout
    clearAll() {
        this.setState({
            displayValue: '',
            previousValue: null,
            operator: null,
            shouldDisplayResult: false,
        });
    }

    render() {
        return (
            <div className="tittle">
                <h1>Calculatrice</h1><br />
                <div className="calculator">
                    <div className="display">{this.state.shouldDisplayResult ? this.state.displayValue : this.state.displayValue || '0'}</div>
                    <div className="divider"></div>
                    <div className="buttons">
                        <button onClick={() => this.updateDisplay('1')}>1</button>
                        <button onClick={() => this.updateDisplay('2')}>2</button>
                        <button onClick={() => this.updateDisplay('3')}>3</button>
                        <button className="operation" onClick={() => this.handleOperation('+')}>+</button>
                        <button onClick={() => this.updateDisplay('4')}>4</button>
                        <button onClick={() => this.updateDisplay('5')}>5</button>
                        <button onClick={() => this.updateDisplay('6')}>6</button>
                        <button className="operation" onClick={() => this.handleOperation('-')}>-</button>
                        <button onClick={() => this.updateDisplay('7')}>7</button>
                        <button onClick={() => this.updateDisplay('8')}>8</button>
                        <button onClick={() => this.updateDisplay('9')}>9</button>
                        <button className="operation" onClick={() => this.handleOperation('*')}>*</button>
                        <button className="clear" onClick={() => this.clearAll()}>C</button>
                        <button onClick={() => this.updateDisplay('0')}>0</button>
                        <button className="egal" onClick={() => this.calculate()}>=</button>
                        <button className="operation" onClick={() => this.handleOperation('/')}>/</button>
                    </div>
                </div>
            </div>

        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('app'));