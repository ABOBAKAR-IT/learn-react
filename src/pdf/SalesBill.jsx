import React from 'react';
import { Page, Document, StyleSheet, Text, View, PDFDownloadLink } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 20
  },
  section: {
    marginBottom: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  text: {
    fontSize: 12,
    marginBottom: 5
  },
  table: {
    display: 'table',
    width: '100%',
    marginBottom: 10
  },
  tableRow: {
    flexDirection: 'row'
  },
  tableCell: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 5,
    flex: 1
  }
});

// Create the SalesBill component
const SalesBill = () => {
  const billData = {
    companyName: 'Your Company',
    name: 'Your Name',
    companyAddress: 'Company’s Address',
    cityStateZip: 'City, State Zip',
    country: 'Country',
    clientCompany: 'Your Client’s Company',
    clientAddress: 'Client’s Address',
    invoiceNumber: 'Invoice#',
    invoiceDate: 'Invoice Date',
    dueDate: 'Due Date',
    itemDescription: 'Item Description',
    qty: 'Qty',
    rate: 'Rate',
    amount: 'Amount',
    invoiceNo: 'INV-12',
    invoiceDateValue: 'Jun 13, 2023',
    dueDateValue: 'Jun 13, 2023',
    products: [
      { description: 'Brochure Design', qty: 2, rate: 100.0, amount: 200.0 }
    ]
  };

  return (
    <div>
      <h1>Sales Bill</h1>
      <PDFDownloadLink document={<SalesBillDocument billData={billData} />} fileName="sales_bill.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download Sales Bill'
        }
      </PDFDownloadLink>
    </div>
  );
};

// Create the SalesBillDocument component
const SalesBillDocument = ({ billData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>Sales Bill</Text>
      </View>
      <View style={styles.section}>
        <Text>{billData.invoiceNumber}</Text>
        <Text>{billData.invoiceDate}</Text>
        <Text>{billData.dueDate}</Text>
      </View>
      <View style={styles.section}>
        <Text>{billData.name}</Text>
        <Text>{billData.companyAddress}</Text>
        <Text>{billData.cityStateZip}</Text>
        <Text>{billData.country}</Text>
      </View>
      <View style={styles.section}>
        <Text>Bill To:</Text>
        <Text>{billData.clientCompany}</Text>
        <Text>{billData.clientAddress}</Text>
        <Text>{billData.cityStateZip}</Text>
        <Text>{billData.country}</Text>
      </View>
     
      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>{billData.itemDescription}</Text>
            <Text style={styles.tableCell}>{billData.qty}</Text>
            <Text style={styles.tableCell}>{billData.rate}</Text>
            <Text style={styles.tableCell}>{billData.amount}</Text>
          </View>
          {billData.products.map((product, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{product.description}</Text>
              <Text style={styles.tableCell}>{product.qty}</Text>
              <Text style={styles.tableCell}>{product.rate}</Text>
              <Text style={styles.tableCell}>{product.amount}</Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default SalesBill;
