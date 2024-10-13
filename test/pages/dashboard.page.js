const DashboardSelector = require("./selectors/dashboard.selector");
const dashboardSelector = new DashboardSelector();

class DashboardPage {
    async open(baseUrl) {
        await browser.url(baseUrl);
    }

    async viewCard(type){
        return await dashboardSelector.cardDashboard(type).isDisplayed();
    }

    async cardLabelText(type){
        switch (type) {
            case "Nama Toko":
                return await dashboardSelector.namaTokoCardLabel.getText();
            case "Penjualan":
                return await dashboardSelector.penjualanCardLabel.getText();
            case "Pembelian":
                return await dashboardSelector.pembelianCardLabel.getText();
            case "Laba Kotor":
                return await dashboardSelector.labaKotorCardLabel.getText();
            case "Total Penjualan":
                return await dashboardSelector.totalPenjualanCardLabel.getText();
            case "Total Pembelian":
                return await dashboardSelector.totalPembelianCardLabel.getText();         
            default:
                throw new Error(`Unknown card type: ${type}`);
                break;
        }        
    }

    async cardAmountText(type){
        switch (type) {
            case "Penjualan":
                return await dashboardSelector.penjualanCardAmountText.getText();
            case "Pembelian":
                return await dashboardSelector.pembelianCardAmountText.getText();
            case "Laba Kotor":
                return await dashboardSelector.labaKotorCardAmountText.getText();
            case "Total Penjualan":
                return await dashboardSelector.totalPenjualanCardAmountText.getText();
            case "Total Pembelian":
                return await dashboardSelector.totalPembelianCardAmountText.getText(); 
            default: throw new Error(`Unknown card type: ${type}`);
                break;
        }
    }

    async cardPrecentageText(type){
        switch (type) {
            case "Penjualan":
                return await dashboardSelector.penjualanCardPrecentageText.getText();
            case "Pembelian":
                return await dashboardSelector.pembelianCardPrecentageText.getText();
            default: throw new Error(`Unknown card type: ${type}`);
                break;
        };
    }
};

module.exports = DashboardPage;