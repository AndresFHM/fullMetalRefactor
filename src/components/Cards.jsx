import { Component } from 'react';
import '../styles/Cards.css';

export class Cards extends Component {
    render() {
        const { data } = this.props;
        return (
            <section id="character-cards">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="card-titles">
                            <h3>{item.name}</h3>
                            <h4>{item.nickName}</h4>
                        </div>
                        <img src={item.imageUrl} alt={item.name} />
                        <p>{item.background}</p>
                    </div>
                ))}
            </section>
        )
    }
}


