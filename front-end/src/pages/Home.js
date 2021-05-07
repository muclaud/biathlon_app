import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Container, Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';

function Home() {
  const { loading, data: { getPosts: posts } = {} } = useQuery(
    FETCH_POSTS_QUERY
  );

  return (
    <Container>
      <Grid columns={3}>
        <Grid.Row className='page-title'>
          <h1>Recent post</h1>
        </Grid.Row>
        <Grid.Row>
          {loading ? (
            <h1>loading post...</h1>
          ) : (
            posts &&
            posts.map((post) => (
              <Grid.Column key={post.id}>
                <PostCard post={post} />
              </Grid.Column>
            ))
          )}
        </Grid.Row>
      </Grid>
    </Container>
  );
}

const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likes {
        username
        createdAt
      }
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
