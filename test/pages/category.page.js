const CategorySelector = require("./selectors/category.selector");
const categorySelector = new CategorySelector();

class CategoryPage {
    async open() {
        await categorySelector.categoryLink.click();
    }

    async addCategoryLink() {
        await categorySelector.addCategoryLink.click();
    }

    async inputNameField(name){
        await categorySelector.nameInput.setValue(name);
    }

    async inputDescriptionField(description){
        await categorySelector.descriptionInput.setValue(description);
    }

    async saveCategoryButton() {
        await categorySelector.saveCategoryButton.click();
    }

    async successToastMessage(){
        const toast = {
            type: await categorySelector.successToastMsg.getText(),
            msg: await categorySelector.successToastDesc.getText()
        };

        return toast;
    }

    async showErrorMessage(){
        return await categorySelector.errorMessage.getText();
    }
};

module.exports = CategoryPage;