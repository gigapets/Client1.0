Will fetch and display all of the DayPosts within the week//




import React from 'react';

import DayPost from './DayPost';

import "./DayPostContainer.css";


class WeekPosts extends React.Component {
    render(){
        return(
            <div className = "weekPosts">
            <h1>Your Days</h1>
                {this.props.dayPosts.map(dayPost => {
                
                return (
                    <div id = "weekPost" className = 'weekPostContainer'>
                    <DayPost
                    date = {dayPost.date}
                    name = {dayPost.name}
                    breakfast = {dayPost.breakfast}
                    bPoints = {dayPost.bPoints}
                    lunch = {dayPost.lunch}
                    lPoints = {dayPost.lPoints}
                    dinner = {dayPost.dinner}
                    dPoints = {dayPost.dPoints}
                    snacks = {dayPost.snacks}
                    sPoints = {dayPost.spoints}
                    />
                    </div>
                );
            })}
        
                
                </div>
        );
    }
}


export default WeekPosts;