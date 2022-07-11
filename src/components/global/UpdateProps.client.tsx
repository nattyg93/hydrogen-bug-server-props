import {useServerProps} from '@shopify/hydrogen';

export default function UpdateProps() {
  const {setServerProps, serverProps} = useServerProps();
  console.log(serverProps.notCleared);
  return (
    <div>
      <button
        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() =>
          setServerProps({notCleared: (serverProps.notCleared ?? 0) + 1})
        }
      >
        add one
      </button>
      <div>Client Value:: {serverProps.notCleared}</div>
    </div>
  );
}
