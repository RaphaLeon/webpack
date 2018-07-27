import React, { Component } from 'react';
import Teacher from './teacher';

class Teachers extends Component {
    render() {
        return (
            <ul>
            {this.props.data.teachers.map((teacherData) => {
               return <Teacher {...teacherData} />     
            })} 
            </ul>
        )
    }
}

export default Teachers;