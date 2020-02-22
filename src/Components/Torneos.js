import React from 'react';
import Calendar from 'react-calendar';



class Torneos extends React.Component{

    state = { 
        date: new Date(), 
        insClik: 0
    };

    Inscribir = () => {
        if(this.state.insClik){
            return(
                <div className="inscripcion">
                    <div>
                        <h2>Fecha limite:</h2>
                        <p>13 de Julio del 2019</p>
                        <p>2 horas antes del evento</p>
                    </div>
                    <div>
                        <h1>Atención!!</h1>
                        <p>Tienes hasta la fecha limite para efectuar el pago o no participaras en el torneo</p>
                        <button>Aceptar</button><button>Cancelar</button>
                    </div>
                </div>
            );    
        }
        return <></>;   
    };

    render(){
        return(
            <div className="torneos ui container">
                <div className="eventos ui two column padded grid">
                    <div className="hoy column">
                        <h3>Torneo de hoy:</h3>
                        <br />
                        <p>Ninguno</p>
                    </div>
                    <div className="calendario eight wide">
                        <Calendar 
                            onChange={( date ) => {this.setState({ date }) }}
                            value={this.state.date}
                        />
                    </div>
                </div>
                <div className="proximos">
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Evento</th>
                                <th>Oficial</th>
                                <th>Fecha</th>
                                <th>Part. Min</th>
                                <th>Part. Max</th>
                                <th>inscripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aniversario doggy's toys</td>
                                <td>No</td>
                                <td>2019-01-01 14:39</td>
                                <td>22</td>
                                <td>30</td>
                                <td>
                                    <a href="#" onClick={() => {!this.state.insClik ? this.setState({ insClik:1 }) : this.setState({ insClik: 0 });}}>
                                        Inscribir
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <this.Inscribir />
                </div>
            </div>
        );
    };
}

export default Torneos;