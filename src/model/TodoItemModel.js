// ユニークなIDを管理する変数
let todoIdx = 0;

export class TodoItemModel {
    /**
     * @param {string} title Todoアイテムのタイトル
     * @param {boolean} completed Todoアイテムが完了済みならばtrue、そうでない場合はfalse
     */
    constructor({ title, completed }) {
        // idは自動的に連番となりそれぞれのインスタンスごとに異なるものとする
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }
}

/*
//以下サンプルコード
const item = new TodoItemModel({
    title: "未完了のTodoアイテム",
    completed: false
});
const completedItem = new TodoItemModel({
    title: "完了済みのTodoアイテム",
    completed: true
});
// それぞれの`id`は異なる
console.log(item.id !== completedItem.id); // => true
*/