// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract TodoList {

    
    string [] categories ;
    

    struct Todo {
        string name;
        string category;
        uint256 timestamp;
        
        
    }

    Todo [] todos;

    function addCategory(string memory _category) external{
        categories.push(_category);
    }

    function getCategory(uint32 _index) external view returns (string memory){
        return categories[_index];
    }
    function getCategories() external view returns (string [] memory) {
        return categories;
    }

    function removeCategory(uint32 _index) external {
        delete categories[_index];
    }

    function getTotalCategories() external view returns(uint256) {
        return categories.length;
    }
    

    function addTodo(string memory _name,string memory _category) external {
        todos.push(Todo(_name,_category,block.timestamp));
    }   

    function getTodos() external view returns (Todo [] memory) {
        return todos;
    }

    function removeTodo(uint32 _index) external {
        delete todos[_index];
    }

    function getTotalTodo() external view returns(uint256) {
        return todos.length;
    }

    

    


}