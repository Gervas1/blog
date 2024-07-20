// 下拉菜单悬停效果
const user = document.querySelector('.user img')
const ul = document.querySelector('.result-list')
user.addEventListener('mouseenter', function () {
    ul.style.display = 'block'
})
user.addEventListener('mouseleave', function () {
    ul.style.display = 'none'
})
ul.addEventListener('mouseenter', function () {
    ul.style.display = 'block'
})
ul.addEventListener('mouseleave', function () {
    ul.style.display = 'none'
})
// 用于存储待办事项的数组
let todoList = [];

// 获取表单元素和待办事项列表元素
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// 提交表单时触发的函数
form.addEventListener('submit', function (event) {
    event.preventDefault(); // 阻止表单提交的默认行为

    const todoText = input.value.trim(); // 获取输入框的值并去除首尾空格

    if (todoText !== '') {
        const todoItem = {
            id: Date.now(),
            text: todoText
        };

        todoList.push(todoItem); // 将待办事项添加到数组中

        // 创建待办事项的HTML元素并添加到列表中
        const li = document.createElement('li');
        li.innerHTML = `
                    <span>${todoText}</span>
                    <button class="edit-btn" data-id="${todoItem.id}">编辑</button>
                    <button class="delete-btn" data-id="${todoItem.id}">删除</button>
                    
                `;
        list.appendChild(li);

        input.value = ''; // 清空输入框的值
    }
});
// 点击编辑按钮时触发的函数
list.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-btn')) {
        const itemId = parseInt(event.target.getAttribute('data-id'));
        const todoItem = todoList.find(item => item.id === itemId); // 找到对应的待办事项对象

        const newText = prompt('请输入新的事项内容', todoItem.text); // 弹出输入框让用户编辑待办事项内容

        if (newText !== null) {
            todoItem.text = newText; // 更新待办事项的内容
            event.target.previousElementSibling.textContent = newText; // 更新对应的HTML元素内容

        }
    }
});
// 点击删除按钮时触发的函数
list.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        const itemId = parseInt(event.target.getAttribute('data-id'));
        todoList = todoList.filter(item => item.id !== itemId); // 从数组中删除对应的待办事项

        event.target.parentElement.remove(); // 删除对应的HTML元素
    }
});

