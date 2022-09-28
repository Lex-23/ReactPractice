import './style/App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="3 hours" 
                    content="Nice post"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <CommentDetail 
                author="Alex" 
                timeAgo="5 min" 
                content="Nice"
                avatar={faker.image.image()}
            />
            <CommentDetail 
                author="Jina" 
                timeAgo="10 days"
                content="Fine"
                avatar={faker.image.image()} 
             />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
