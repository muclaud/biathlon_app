import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({
  post: { id, body, createdAt, username, likeCount, commentCount, likes },
}) {
  function likePost() {
    console.log('Liked');
  }
  function commentOnPost() {
    console.log('Comment on post');
  }

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={'/posts/${id}'}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          color='teal'
          content='Like'
          icon='heart'
          onClick={likePost}
          // label={{
          //   basic: true,
          //   color: 'teal',
          //   pointing: 'left',
          //   content: { likeCount },
          // }}
        />
        <Button
          color='blue'
          content='Comment'
          icon='comment'
          onClick={commentOnPost}
          // label={{
          //   basic: true,
          //   color: 'teal',
          //   pointing: 'left',
          //   content: { likeCount },
          // }}
        />
      </Card.Content>
    </Card>
  );
}
export default PostCard;
