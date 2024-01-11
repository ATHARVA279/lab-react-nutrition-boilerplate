import React, { Component } from 'react';

export default class FoodBox extends Component{
    constructor() {
      super()
    
      this.state = {
         countNo:0,
         countCals:0
      }
    }
    

    render(){
        let {countNo,countCals}= this.state
        let data = this.props
        let handleQuantity=(event)=>{
            this.setState({countNo:event.target.value})
        }

        let handleClick=(event)=>{

            this.setState({countCals:countNo*data.cal})
        }

        let handleRes=(event)=>{
            this.setState({countNo:0})
            this.setState({countCals:0})
        }
        
        return(
            <>
            <div className="flex">
            <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image">
                            <img src={data.img} />
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{data.name}</strong> <br />
                            <small>{data.cal}</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" placeholder='Enter a Number' onChange={handleQuantity} value={this.state.countNo}/>
                            </div>
                            <div className="control">
                            <button className="button is-info" onClick={handleClick}>
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                </div>
                    <div className='Re'>
                        <h2>
                            {countNo} {this.props.name} = {countCals} Calories
                        </h2>
                        <button onClick={handleRes} className='reset'>Reset</button>
                    </div>
            </div>

            </>
        )
    }
}