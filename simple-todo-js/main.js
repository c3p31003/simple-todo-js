import 'style.css'


//onClickAdd
const onClickAdd = () => {
  //テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById('add-text').value;
  document.getElementById('add-text').value = '';

  //未完了リストに追加
  createIncomplateTodo(inputText);
};

//渡された引数を基に未完了のTODOを作成する関数
const createIncomplateTodo = (todo) => {
  //li生成
  const li = document.createElement('li');

  //div生成
  const div = document.createElement('div');
  div.className = 'list-row';

  //p生成
  const p = document.createElement('p');
  p.className = 'todo-item';
  p.innerText = todo;
  //削除ボタン生成delete-button
  const delete_button = document.createElement('button');
  delete_button.innerText = '削除';
  delete_button.className = 'delete-button';
  //完了ボタン生成
  const complate_button = document.createElement('button');
  complate_button.innerText = '完了';
  complate_button.className = 'complate-button';
  complate_button.addEventListener('click', () => {
    //押された完了ボタンの親にあるliタグ配下の完了ボタンと削除ボタンを削除
    const moveTarget = delete_button.closest('li');
    complate_button.nextElementSibling.remove();
    complate_button.remove();
    //戻すボタン生成
    const back_button = document.createElement('button');
    back_button.innerText = '戻す';
    back_button.className = 'back_button';
    moveTarget.firstElementChild.appendChild(back_button);
    document.getElementById('complate-list').appendChild(moveTarget);

    //戻すボタンが押されたとき
    back_button.addEventListener('click', () => {
      // 元のタスクテキストを取得して、未完了リストに戻す
      const text = back_button.previousElementSibling.innerText;
      createIncomplateTodo(text);
      back_button.closest('li').remove();
    });
  });

  delete_button.addEventListener('click', () => {
    //押された削除ボタンの親にあるliタグを未完了リストから削除
    const deleteTarget = delete_button.closest('li');
    // console.log(deleteTarget)
    document.getElementById('incomplate-list').removeChild(deleteTarget);
  });

  //liタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(complate_button);
  div.appendChild(delete_button);
  li.appendChild(div);
  console.log(li);

  //未完了リストに追加
  document.getElementById('incomplate-list').appendChild(li);
};

document.getElementById('add-button').addEventListener('click', onClickAdd);

