import React, { useState } from "react";
import { results } from './data';
import { Grid, TextField, Button, Box, Typography, Paper } from "@mui/material";

const EditableTable = () => {
  const [data, setData] = useState(results);
  const [editIdx, setEditIdx] = useState(-1);

  const handleInputChange = (e, index, field, subField = null) => {
    const newData = [...data];
    
    if (subField) {
      newData[index][field][subField] = e.target.value; 
    } else {
      newData[index][field] = e.target.value;
    }
    
    setData(newData);
  };

  const downloadJSON = () => {
    const fileData = JSON.stringify(data, null, 2);
    const blob = new Blob([fileData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "edited_invoices.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Editable Invoices Table
      </Typography>

      {data.map((invoice, index) => (
        <Paper key={index} sx={{ marginBottom: 4, padding: 3 }}>
          <Typography variant="h6" sx={{mb:2}}>
            Invoice {invoice.InvoiceInformation.InvoiceNumber}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Invoice Number"
                fullWidth
                value={invoice.InvoiceInformation.InvoiceNumber}
                onChange={(e) =>
                  handleInputChange(e, index, "InvoiceInformation", "InvoiceNumber")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Invoice Date"
                fullWidth
                value={invoice.InvoiceInformation.InvoiceDate}
                onChange={(e) =>
                  handleInputChange(e, index, "InvoiceInformation", "InvoiceDate")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Supplier Name"
                fullWidth
                value={invoice.SupplierInformation.SupplierName}
                onChange={(e) =>
                  handleInputChange(e, index, "SupplierInformation", "SupplierName")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Address"
                fullWidth
                value={invoice.SupplierInformation.Address}
                onChange={(e) =>
                  handleInputChange(e, index, "SupplierInformation", "Address")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="GSTIN"
                fullWidth
                value={invoice.SupplierInformation.GSTIN}
                onChange={(e) =>
                  handleInputChange(e, index, "SupplierInformation", "GSTIN")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Mobile"
                fullWidth
                value={invoice.SupplierInformation.Mobile}
                onChange={(e) =>
                  handleInputChange(e, index, "SupplierInformation", "Mobile")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="CustomerName"
                fullWidth
                value={invoice.CustomerInformation.CustomerName}
                onChange={(e) =>
                  handleInputChange(e, index, "CustomerInformation", "CustomerName")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                fullWidth
                value={invoice.CustomerInformation.State}
                onChange={(e) =>
                  handleInputChange(e, index, "CustomerInformation", "State")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="StateCode"
                fullWidth
                value={invoice.CustomerInformation.StateCode}
                onChange={(e) =>
                  handleInputChange(e, index, "CustomerInformation", "StateCode")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="GSTIN"
                fullWidth
                value={invoice.CustomerInformation.GSTIN}
                onChange={(e) =>
                  handleInputChange(e, index, "CustomerInformation", "GSTIN")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            {/* <Grid item xs={12} sm={6}>
              <TextField
                label="S.No"
                fullWidth
                value={invoice.ProductDetails.S.No}
                onChange={(e) =>
                  handleInputChange(e, index, "ProductDetails", "S.No")
                }
                disabled={editIdx !== index}
              />
            </Grid> */}

            <Grid item xs={12} sm={6}>
              <TextField
                label="DescriptionOfGoods"
                fullWidth
                value={invoice.ProductDetails.DescriptionOfGoods}
                onChange={(e) =>
                  handleInputChange(e, index, "ProductDetails", "DescriptionOfGoods")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="HSNCode"
                fullWidth
                value={invoice.ProductDetails.HSNCode}
                onChange={(e) =>
                  handleInputChange(e, index, "ProductDetails", "HSNCode")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quantity"
                fullWidth
                value={invoice.ProductDetails.Quantity}
                onChange={(e) =>
                  handleInputChange(e, index, "ProductDetails", "Quantity")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Rate"
                fullWidth
                value={invoice.ProductDetails.Rate}
                onChange={(e) =>
                  handleInputChange(e, index, "ProductDetails","Rate")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Amount"
                fullWidth
                value={invoice.ProductDetails.Amount}
                onChange={(e) =>
                  handleInputChange(e, index, "ProductDetails", "Amount")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="TotalAmountAfterTax"
                fullWidth
                value={invoice.TaxDetails.TotalAmountAfterTax}
                onChange={(e) =>
                  handleInputChange(e, index, "TaxDetails", "TotalAmountAfterTax")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="AddCGST9Percent"
                fullWidth
                value={invoice.TaxDetails.AddCGST9Percent}
                onChange={(e) =>
                  handleInputChange(e, index, "TaxDetails", "AddCGST9Percent")
                }
                disabled={editIdx !== index}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="TotalAmountAfterTax"
                fullWidth
                value={invoice.TaxDetails.TotalAmountAfterTax}
                onChange={(e) =>
                  handleInputChange(e, index, "TaxDetails", "TotalAmountAfterTax")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="TermsAndConditions"
                fullWidth
                value={invoice.TermsAndConditions}
                onChange={(e) =>
                  handleInputChange(e, index,"TermsAndConditions")
                }
                disabled={editIdx !== index}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="AuthorizedSignatory"
                fullWidth
                value={invoice.AuthorizedSignatory}
                onChange={(e) =>
                  handleInputChange(e, index, "AuthorizedSignatory")
                }
                disabled={editIdx !== index}
              />
            </Grid>

          </Grid>

          <Box mt={2}>
            {editIdx === index ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setEditIdx(-1)}
              >
                Save
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => setEditIdx(index)}
              >
                Edit
              </Button>
            )}
          </Box>
        </Paper>
      ))}

      <Button variant="outlined" color="success" onClick={downloadJSON} sx={{ marginTop: 2 }}>
        Download Edited Data
      </Button>
    </Box>
  );
};

export default EditableTable;
