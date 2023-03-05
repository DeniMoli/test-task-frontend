import {defineStore} from 'pinia'

type item = {
    id: number
    name: string
}

export const useStoreItem = defineStore('storeItem', {
    state(): {
        personalItem: item[]
        availableItem: item[]
        selectedPersonalItem: item[]
        selectedAvailableItem: item[]
        maxPersonalSelected: number
    } {
        return {
            personalItem: [
                {
                    "id": 1,
                    "name": "Shoes 1"
                },
                {
                    "id": 2,
                    "name": "Shoes 2"
                },
                {
                    "id": 3,
                    "name": "Shoes 3"
                },
                {
                    "id": 4,
                    "name": "Shoes 4"
                },
                {
                    "id": 5,
                    "name": "T-shirt 1"
                },
                {
                    "id": 6,
                    "name": "T-shirt 2"
                },
                {
                    "id": 7,
                    "name": "T-shirt 3"
                },
                {
                    "id": 8,
                    "name": "T-shirt 4"
                }
            ],
            availableItem:
                [
                    {
                        "id": 11,
                        "name": "Jacket 1"
                    },
                    {
                        "id": 12,
                        "name": "Jacket 2"
                    },
                    {
                        "id": 13,
                        "name": "Jacket 3"
                    },
                    {
                        "id": 14,
                        "name": "Jacket 4"
                    },
                    {
                        "id": 15,
                        "name": "Hoodie 1"
                    },
                    {
                        "id": 16,
                        "name": "Hoodie 2"
                    },
                    {
                        "id": 17,
                        "name": "Hoodie 3"
                    },
                    {
                        "id": 18,
                        "name": "Hoodie 4"
                    }
                ],
            selectedPersonalItem: [],
            selectedAvailableItem: [],
            maxPersonalSelected: 6
        }
    },
    actions: {
        selectPersonalItem(value: item) {
            if (this.selectedPersonalItem.length >= this.maxPersonalSelected) {
                alert(`Максимально чило вещей ${this.maxPersonalSelected}`)
            } else {
                this.selectedPersonalItem.push(value)
                this.personalItem = this.personalItem.filter((e) => e.id !== value.id)
            }
        },

        selectAvailableItem(value: item) {
            this.selectedAvailableItem.pop()
            this.selectedAvailableItem.push(value)
        },

        deleteItemInPersonalItem(value: item) {
            console.log(this.selectedPersonalItem.filter((e) => e.id !== value.id))
            this.selectedPersonalItem = this.selectedPersonalItem.filter((e) => e.id !== value.id)
            this.personalItem.push(value)
        },

        deleteItemInAvailableItem(value: item) {
            this.selectedAvailableItem = this.selectedAvailableItem.filter((e) => e.id !== value.id)
            this.availableItem.push(value)
        }
    }
})
