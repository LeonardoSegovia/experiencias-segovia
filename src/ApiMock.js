const getItemList = () => {
  const itemList = [
    {
      itemId: 1,
      title: "Item 1",
      description: "Description 1",
      imageUrl: "#",
      stock: 1,
      price: 1.1,
    },
    {
      itemId: 2,
      title: "Item 2",
      description: "Description 2",
      imageUrl: "#",
      stock: 2,
      price: 1.1,
    },
    {
      itemId: 3,
      title: "Item 3",
      description: "Description 3",
      imageUrl: "#",
      stock: 3,
      price: 1.3,
    },
    {
      itemId: 4,
      title: "Item 4",
      description: "Description 4",
      imageUrl: "#",
      stock: 4,
      price: 1.4,
    },
    {
      itemId: 5,
      title: "Item 5",
      description: "Description 5",
      imageUrl: "#",
      stock: 5,
      price: 1.5,
    },
    {
      itemId: 6,
      title: "Item 6",
      description: "Description 6",
      imageUrl: "#",
      stock: 6,
      price: 1.6,
    },
    {
      itemId: 7,
      title: "Item 7",
      description: "Description 7",
      imageUrl: "#",
      stock: 7,
      price: 1.7,
    },
    {
      itemId: 8,
      title: "Item 8",
      description: "Description 8",
      imageUrl: "#",
      stock: 8,
      price: 1.8,
    },
  ];

  return new Promise(function (resolve) {
    setTimeout(() => resolve(itemList), 2000);
  });
};

export const ApiMock = {
  getItemList,
};
