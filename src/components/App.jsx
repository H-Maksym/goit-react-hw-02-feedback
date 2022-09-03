import Counter from 'components/Counter/Counter';

export const App = () => {
  return (
    <div
      style={{
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>React homework</h1>
      <Counter />
    </div>
  );
};
