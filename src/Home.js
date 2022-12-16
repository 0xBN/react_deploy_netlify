import { useStoreState } from 'easy-peasy';
import { Feed } from './Feed';

export const Home = ({ fetchError, isLoading }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className='Home'>
      {isLoading && <p className='statusMsg'>Loading posts...</p>}
      {!isLoading && fetchError && (
        <p className='statusMsg' style={{ color: 'red' }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p className='statusMsg' style={{ marginTop: '2rem' }}>
            No posts to display.
          </p>
        ))}
    </main>
  );
};
