import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Header from "../Layouts/Headers/Header";

// Function to generate and download the invoice PDF
const GenerateInvoice = () => {
  html2canvas(document.querySelector("#invoiceCapture")).then((canvas) => {
    const imgData = canvas.toDataURL("image/png", 1.0);
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: [612, 792],
    });
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("invoice-001.pdf");
  });
};

const InvoiceModal = ({
  showModal,
  closeModal,
  info = {},
  currency = "$",
  items = [],
  subTotal = 0,
  taxAmmount = 0,
  discountAmmount = 0,
  total = 0,
}) => {
  return (
    <Modal show={showModal} onHide={closeModal} size="lg" centered>
      <Header />
      <div id="invoiceCapture">
        {/* Invoice Header */}
        <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
          <div className="w-100">
            <h4 className="fw-bold my-2">
              {info.billFrom || "Janani Traders"}
            </h4>
            <h6 className="fw-bold text-secondary mb-1">
              Invoice #: {info.invoiceNumber || ""}
            </h6>
          </div>
          <div className="text-end ms-4">
            <h6 className="fw-bold mt-1 mb-2">Amount Due:</h6>
            <h5 className="fw-bold text-secondary">
              {currency} {total}
            </h5>
          </div>
        </div>

        {/* Billing Details */}
        <div className="p-4">
          <Row className="mb-4">
            <Col md={4}>
              <div className="fw-bold">Billed to:</div>
              <div>{info.billTo || ""}</div>
              <div>{info.billToAddress || ""}</div>
              {/* <div>{info.billToEmail || ""}</div> */}
            </Col>
            <Col md={4}>
              <div className="fw-bold">Billed From:</div>
              <div>{info.billFrom || ""}</div>
              <div>{info.billFromAddress || ""}</div>
              {/* <div>{info.billFromEmail || ""}</div> */}
            </Col>
            <Col md={4}>
              <div className="fw-bold mt-2">Date Of Issue:</div>
              <div>{info.dateOfIssue || ""}</div>
            </Col>
          </Row>

          {/* Invoice Items Table */}
          <Table className="mb-0">
            <thead>
              <tr>
                <th>QTY</th>
                <th>DESCRIPTION</th>
                <th className="text-end">PRICE</th>
                <th className="text-end">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td style={{ width: "70px" }}>{item.quantity}</td>
                  <td>
                    {item.name} - {item.description}
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} {item.price}
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} {item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Totals and Discounts */}
          <Table>
            <tbody>
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
              <tr className="text-end">
                <td></td>
                <td className="fw-bold" style={{ width: "100px" }}>
                  SUBTOTAL
                </td>
                <td className="text-end" style={{ width: "100px" }}>
                  {currency} {subTotal}
                </td>
              </tr>
              {taxAmmount !== 0.0 && (
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    TAX
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} {taxAmmount}
                  </td>
                </tr>
              )}
              {discountAmmount !== 0.0 && (
                <tr className="text-end">
                  <td></td>
                  <td className="fw-bold" style={{ width: "100px" }}>
                    DISCOUNT
                  </td>
                  <td className="text-end" style={{ width: "100px" }}>
                    {currency} {discountAmmount}
                  </td>
                </tr>
              )}
              <tr className="text-end">
                <td></td>
                <td className="fw-bold" style={{ width: "100px" }}>
                  TOTAL
                </td>
                <td className="text-end" style={{ width: "100px" }}>
                  {currency} {total}
                </td>
              </tr>
            </tbody>
          </Table>

          {/* Notes Section */}
          {info.notes && (
            <div className="bg-light py-3 px-4 rounded">{info.notes}</div>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="pb-4 px-4">
        <Row>
          <Col md={6}>
            <Button
              variant="primary"
              className="d-block w-100"
              onClick={GenerateInvoice}
            >
              Send Invoice
            </Button>
          </Col>
          <Col md={6}>
            <Button
              variant="outline-primary"
              className="d-block w-100 mt-3 mt-md-0"
              onClick={GenerateInvoice}
            >
              Download Copy
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default InvoiceModal;
