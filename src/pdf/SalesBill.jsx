import React from 'react';
import { Page, Document, StyleSheet, Text, View, PDFDownloadLink, Image } from '@react-pdf/renderer';
import logo from './logo512.png'
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
  logo: {
    width: 100,
    height: 100,
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
      { description: 'Brochure Design', pic:logo,qty: 2, rate: 100.0, amount: 200.0 }
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
     <View style={{display:"flex",flexDirection: 'row'}}>
     <View style={[styles.section, { marginRight: 200 }]}>
        <Image src={logo} style={styles.logo} />
      </View>
      <View style={styles.section}>
        <Text>{billData.invoiceNumber}</Text>
        <Text>{billData.invoiceDate}</Text>
        <Text>{billData.dueDate}</Text>
      </View>
     </View>

      <View style={{display:"flex",flexDirection: 'row'}}>
        <View style={[styles.section, { marginRight: 200 }]}>
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
      </View>

      <View style={styles.section}>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Item Name</Text>
            <Text style={styles.tableCell}>Picture</Text>
            <Text style={styles.tableCell}>Quantity</Text>
            <Text style={styles.tableCell}>Rate</Text>
            <Text style={styles.tableCell}>Total Amount</Text>
          </View>
          {billData.products.map((product, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{product.description}</Text>
              <Image src={logo} style={[styles.tableCell,styles.logo]} />
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
