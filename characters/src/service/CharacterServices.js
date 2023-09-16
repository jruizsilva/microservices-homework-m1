class CharacterServices {
  constructor(characterModel) {
    this.characterModel = characterModel
  }

  async create(character) {
    return this.characterModel.create(character)
  }

  async getAll() {
    return this.characterModel.find({})
  }

  async getById(id) {
    return this.characterModel.findById(id)
  }

  async update(id, character) {
    return this.characterModel.findByIdAndUpdate(id, character, {
      new: true
    })
  }

  async delete(id) {
    return this.characterModel.findByIdAndDelete(id)
  }
}
export default CharacterServices
