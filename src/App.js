import React from 'react';
import useInput from './useInput';

function App() {
  const {value, data, onChange, confirm} = useInput('');

  return (
    <div>
        <div>学生一覧:
          { data }
        </div>
        <div>追加する名前を入力してください：</div>
        <input type="text" value={ value } onChange={ onChange } />
        <button onClick={ confirm }>確認</button>
        <div>追加する名前：{ value }</div>
        <div>新しい一覧：{ data }</div>
    </div>  
  );
}

export default App;