class DashboardSelector {
    
    getLabel(index) {
        return $$('dt.chakra-stat__label')[index];
    }
    
    getAmount(index) {
        return $$('dd.chakra-stat__number')[index];
    }

    getPercentage(index) {
        return $$('dd.chakra-stat__help-text')[index];
    }

    get namaTokoCardLabel() {
        return this.getLabel(0);
    }

    get penjualanCardLabel() {
        return this.getLabel(1);
    }

    get pembelianCardLabel() {
        return this.getLabel(2);
    }

    get labaKotorCardLabel() {
        return this.getLabel(3);
    }

    get totalPenjualanCardLabel() {
        return this.getLabel(4);
    }

    get totalPembelianCardLabel() {
        return this.getLabel(5);
    }

    get penjualanCardAmountText() {
        return this.getAmount(1);
    }

    get pembelianCardAmountText() {
        return this.getAmount(2);
    }

    get labaKotorCardAmountText() {
        return this.getAmount(3);
    }

    get totalPenjualanCardAmountText() {
        return this.getAmount(4);
    }

    get totalPembelianCardAmountText() {
        return this.getAmount(5);
    }

    get penjualanCardPrecentageText() {
        return this.getPercentage(0);
    }

    get pembelianCardPrecentageText() {
        return this.getPercentage(1);
    }

    cardDashboard(type) {
        const card = $$('div.css-13pc7q0');
        const mapping = {
            "Nama Toko": 0,
            "Penjualan": 1,
            "Pembelian": 2,
            "Laba Kotor": 3,
            "Total Penjualan": 4,
            "Total Pembelian": 5,
        };

        return card[mapping[type]]; 
    }
}

module.exports = DashboardSelector;
