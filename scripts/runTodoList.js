const main = async () => {
    const todoContractFactory = await hre.ethers.getContractFactory("TodoList");
    const todoContract = await todoContractFactory.deploy();
    await todoContract.deployed();
    console.log("Contract addy:", todoContract.address);

    let CountCat;
    CountCat = await todoContract.getTotalCategories();
    console.log(CountCat.toNumber());

    let Counttodo;
    Counttodo = await todoContract.getTotalTodo();
    console.log(Counttodo.toNumber());

    let addcategory = await todoContract.addCategory("Learn");

    let addcategory1 = await todoContract.addCategory("Read");

    let categories = await todoContract.getCategories();
    console.log(categories);
    
    let addcategory2=await todoContract.getCategory(0);
    let addTodo = await todoContract.addTodo("Learn Solidity",""+addcategory2);

    let todos = await todoContract.getTodos();
    console.log(todos);
    

    CountCat = await todoContract.getTotalCategories();
    console.log(CountCat.toNumber());

    Counttodo = await todoContract.getTotalTodo();
    console.log(Counttodo.toNumber());
    
    
    

}

const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();