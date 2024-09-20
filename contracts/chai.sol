// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "hardhat/console.sol";


contract chai{

    struct Memo{
        string name;
        string message;
        string time;
        uint timestamp;
        address from;
    }

    Memo[] memos;
    address payable owner; //owner is going to receive funds
    constructor(){
        owner = payable(msg.sender);
    }

    // function buyChai(string calldata name,string calldata message) external payable{
    //     require(msg.value>0,"Please pay more than 0 ether");
    //     owner.transfer(msg.value);
    //     memos.push(Memo(name,message,block.timestamp,msg.sender));
    // }

    function getMemos() public view returns(Memo[] memory){
        return memos;
    }

    function buyChai2(string calldata person,string calldata date,string calldata time) external payable{
        require(msg.value>0,"Please pay more than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(person,date,time,block.timestamp,msg.sender));
    }

}