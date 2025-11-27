
import { RecipeModel } from './models';

export const MOCK_RECIPES: RecipeModel[] = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish.',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4RKYbVxZgmQHj8iOoyFrjnFgtCQOAIxBcS8X7boU5g8tsiTL8Euvi3yFyx8g9fcawSdv8UpYcblzMHbv9GjbEfy_CFGyM6GfhY0eW8FU5g&s=10',
    ingredients: [
      { name: 'Spaghetti', quantity: 200, unit: 'g' },
      { name: 'Guanciale', quantity: 100, unit: 'g' },
      { name: 'Egg Yolks', quantity: 4, unit: 'each' },
      { name: 'Pecorino Romano Cheese', quantity: 50, unit: 'g' },
      { name: 'Black Pepper', quantity: 1, unit: 'tsp' },
    ],
  },
  {
    id: 2,
    name: 'Caprese Salad',
    description: 'A simple and refreshing Italian salad.',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfc2sRBdEcji7GZMOfT3SkBZkrciSt2dSioaMv_0vUF5dHotvpRoiQEgZUITDbtU-3h9FQ9Co-W_oeHkBMTmZsdoLJkcSErznkWXaHrRm&s=10',
    ingredients: [
      { name: 'Tomatoes', quantity: 4, unit: 'each' },
      { name: 'Fresh Mozzarella', quantity: 200, unit: 'g' },
      { name: 'Fresh Basil', quantity: 1, unit: 'bunch' },
      { name: 'Extra Virgin Olive Oil', quantity: 2, unit: 'tbsp' },
    ],
  },
];
