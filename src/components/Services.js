import React, { Component } from 'react'
import Title from '../components/Title'
import {FaCocktail, FaShuttleVan, FaHiking, FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state = {
        services: [
           { icon: <FaCocktail/>,
            title: "Free cocktails",
            info: "Lorem ipsum dolor sit amet, consectetut, sed do eiusmod"
            } ,
            {icon: <FaShuttleVan/>,
            title: "Free shuttling",
            info: "Lorem ipsum dolor sit amet, consectet, sed do eiusmod"
            } ,
            { icon: <FaHiking/>,
            title: "Long hikes",
            info: "Lorem ipsum dolor sit amet, consecteturt, sed do eiusmod"
            },
            {icon: <FaBeer/>,
            title: "Too much beer",
            info: "Lorem ipsum dolor sit amet, consectetur , sed do eiusmod"
            }      
        ]
    }
    render() {
        return (
            <section className="services">
            <Title title="services"/>
            <div className="services-center">
        {this.state.services.map((item, index)=> {return (
        <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>{item.info}</p>
        </article>
        )} )}
            </div>
            
            </section>
        )
    }
}

