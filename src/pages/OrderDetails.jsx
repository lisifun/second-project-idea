import React, { useContext, useEffect } from "react";
import { OrderContext } from "../context/order.context";
import { DateTime } from "luxon";
import paw from "../assets/paw.png";

const OrderDetails = () => {
  const { updatedOrder } = useContext(OrderContext);

  const hours = Math.floor(
    updatedOrder.packetDuration.reduce((total, duration) => {
      return total + duration;
    }, 0) / 60
  );
  const minutes =
    updatedOrder.packetDuration.reduce((total, duration) => {
      return total + duration;
    }, 0) % 60;

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="order-details-page">
      <h1>Order Details!</h1>
      <div className="confirmation-info">
        <strong className="date-time-title">Date & Time</strong>
        <div className="client-time-info">
          <i className="fas fa-clock"></i>
          <div>{updatedOrder.time}</div>
        </div>

        <div className="client-date-info">
          <i className="fas fa-calendar"></i>
          <div>
            {DateTime.fromISO(updatedOrder.date).toLocaleString(
              DateTime.DATE_MED_WITH_WEEKDAY
            )}
          </div>
        </div>

        <hr
          style={{
            width: "20vw",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        ></hr>

        <strong className="service-size-title">Size & Services</strong>
        <div className="client-size-info">
          <img src={paw} alt="paw" style={{ width: "18px", height: "18px" }} />
          <div>Dog Size: {updatedOrder.size}</div>
        </div>
        <div className="client-service-info">
          <img src={paw} alt="paw" style={{ width: "18px", height: "18px" }} />
          <div>Services: {updatedOrder.packet.join(", ")}</div>
        </div>

        <div className="client-duration-info">
          <i class="fas fa-hourglass"></i>
          <div>
            {hours > 1 ? `${hours} hours` : `${hours} hour`} {" and "}
            {minutes > 1 ? `${minutes} minutes` : `${minutes} minute`}
          </div>
        </div>

        <hr
          style={{
            width: "20vw",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        ></hr>

        <strong className="details-title">Your Details</strong>
        <div className="client-name-info">
          <i className="fas fa-user"></i>
          <div>
            {updatedOrder.firstName} {updatedOrder.lastName}
          </div>
        </div>
        <div className="client-phone-info">
          <i className="fas fa-phone"></i>
          <div>
            ({updatedOrder.phone.slice(0, 3)}){updatedOrder.phone.slice(3, 6)}-
            {updatedOrder.phone.slice(6)}
          </div>
        </div>
        <div className="client-email-info">
          <i className="fas fa-envelope"></i>
          <div>{updatedOrder.email}</div>
        </div>

        <hr
          style={{
            width: "20vw",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        ></hr>

        <strong className="summary-title">Summary</strong>
        <div className="service-info">
          <div>Services</div>
          <div>
            $
            {updatedOrder.packetPrice.reduce((total, packet) => {
              return total + packet;
            }, 0)}
          </div>
        </div>

        <div className="dog-size-info">
          <div>Dog size </div>
          <div>${updatedOrder.sizePrice}</div>
        </div>

        <div className="total-info">
          <strong>Total</strong>
          <div>
            $
            {updatedOrder.packetPrice.reduce((total, packet) => {
              return total + packet;
            }, 0) + updatedOrder.sizePrice}{" "}
          </div>
        </div>
      </div>

      {/* <div
        style={{
          width: "20vw",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <hr
          style={{
            width: "20vw",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        ></hr>
        <div style={{ display: "flex", gap: "8px" }}>
          <i className="fas fa-user"></i>
          <div>
            {updatedOrder.firstName} {updatedOrder.lastName}
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <i className="fas fa-phone"></i>
          <div>
            +1({updatedOrder.phone.slice(0, 3)}){updatedOrder.phone.slice(3, 6)}
            -{updatedOrder.phone.slice(6)}
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <i className="fas fa-envelope"></i>
          <div>{updatedOrder.email}</div>
        </div>

        <hr
          style={{
            width: "20vw",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        ></hr>

        <div style={{ display: "flex", gap: "8px" }}>
          <i className="fas fa-clock"></i>
          <div>{updatedOrder.time}</div>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <i className="fas fa-calendar"></i>
          <div>
            {" "}
            {DateTime.fromISO(updatedOrder.date).toLocaleString(
              DateTime.DATE_MED_WITH_WEEKDAY
            )}
          </div>
        </div>

        <hr
          style={{
            width: "20vw",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        ></hr>

        <div style={{ display: "flex", gap: "8px" }}>
          <img src={paw} alt="paw" style={{ width: "18px", height: "18px" }} />
          <div>
            {updatedOrder.packet.join(",")} | {updatedOrder.size}
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px" }}>
          <i className="fas fa-money-bill"></i>
          <div>
            $
            {updatedOrder.packetPrice.reduce((total, price) => {
              return total + price;
            }) + updatedOrder.sizePrice}
          </div>
        </div>
        <hr
          style={{
            width: "20vw",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        ></hr>

        <div style={{ display: "flex", gap: "8px" }}>
          <i className="fas fa-comment"></i>
          {updatedOrder.comment ? updatedOrder.comment : "There is no comment"}
        </div>
        <hr
          style={{
            width: "20vw",
            height: "1.5px",
            backgroundColor: "black",
            border: "none",
          }}
        ></hr>
      </div> */}
    </div>
  );
};

export default OrderDetails;
