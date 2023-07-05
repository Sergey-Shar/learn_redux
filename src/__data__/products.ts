import { IProduct } from "../shared/types/product.types";

export const PRODUCTS: IProduct[] = [
	{
		id: self.crypto.randomUUID(),
		image:
			'https://raw.githubusercontent.com/Sergey-Shar/learn_redux/feature/add-custom-redux/src/assets/images/zion-2.webp',
		name: 'Nike Zion 2',
		description: 'Some text',
		price: 89,
		quantity: 1
	},
	{
		id: self.crypto.randomUUID(),
		image:
			'https://raw.githubusercontent.com/Sergey-Shar/learn_redux/feature/add-custom-redux/src/assets/images/air-max-pre-day.webp',
		name: 'Nike Air max pre-day',
		description: 'Some text',
		price: 120,
		quantity: 1
	},
	{
		id: self.crypto.randomUUID(),
		image:
			'https://raw.githubusercontent.com/Sergey-Shar/learn_redux/feature/add-custom-redux/src/assets/images/jordan-retro.webp',
		name: 'Jordan retro',
		description: 'Some text',
		price: 78,
		quantity: 1
	},
	{
		id: self.crypto.randomUUID(),
		image:
			'https://raw.githubusercontent.com/Sergey-Shar/learn_redux/feature/add-custom-redux/src/assets/images/jumpman-white.webp',
		name: 'Nike Jumpman white',
		description: 'Some text',
		price: 89,
		quantity: 1
	},
	{
		id: self.crypto.randomUUID(),
		image:
			'https://raw.githubusercontent.com/Sergey-Shar/learn_redux/feature/add-custom-redux/src/assets/images/jumpman.webp',
		name: 'Nike Jumpman ',
		description: 'Some text',
		price: 89,
		quantity: 1
	},
	{
		id: self.crypto.randomUUID(),
		image:
			'https://raw.githubusercontent.com/Sergey-Shar/learn_redux/feature/add-custom-redux/src/assets/images/jordan-two.webp',
		name: 'Jordan two2',
		description: 'Some text',
		price: 189,
		quantity: 1
	}
]
