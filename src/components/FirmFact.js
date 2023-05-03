import Button from "./Button";
import FirmFactCard from "./FirmFactCard";
import close from "../../src/assets/close-btn.svg";

// Configuring an array with objects could simplify
// the grid elements as an improvement
export default function FirmFact() {
  return (
    <div className="firm-fact">
      <h2>Firm Facts</h2>
      <button type="button" className="firm-fact__close-btn">
        <img src={close} alt="close" />
      </button>
      <div className="firm-fact__grid">
        <div className="firm-fact__featured">
          <FirmFactCard variant="border">
            <Button disabled={false} variant="icon">
              This is a two line button that terminates with...
            </Button>
          </FirmFactCard>
        </div>

        <div className="firm-fact__row">
          <FirmFactCard variant="default">
            <Button disabled={false} variant="icon">
              This is a two line button that terminates with...
            </Button>
          </FirmFactCard>
        </div>

        <div className="firm-fact__row">
          <FirmFactCard variant="default">
            <Button disabled={false} variant="default">
              This is a one line button
            </Button>
          </FirmFactCard>
        </div>

        <div className="firm-fact__row">
          <FirmFactCard variant="default">
            <Button disabled={false} variant="icon">
              This is a two line button that terminates with...
            </Button>
          </FirmFactCard>
        </div>

        <div className="firm-fact__row firm-fact--btn-top">
          <FirmFactCard variant="default">
            <Button disabled={false} variant="icon">
              This is a two line button that terminates with...
            </Button>
          </FirmFactCard>
        </div>

        <div className="firm-fact__row firm-fact--btn-top">
          <FirmFactCard variant="default">
            <Button disabled={true} variant="icon">
              This is a two line button that terminates with...
            </Button>
          </FirmFactCard>
        </div>

        <div className="firm-fact__row firm-fact--btn-top">
          <FirmFactCard variant="border">
            <Button disabled={false} variant="icon">
              This is a two line button that terminates with...
            </Button>
          </FirmFactCard>
        </div>
      </div>
    </div>
  );
}
