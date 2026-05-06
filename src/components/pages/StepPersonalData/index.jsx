import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useReservationStore } from "../../contexts/useReservationStore";
import { useState } from "react";

export default function StepPersonalData() {
    const { reservationData, nextScreen, previousScreen, updateData } = useReservationStore();
    const [name, setName] = useState(reservationData.name || "");
    const [email, setEmail] = useState(reservationData.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    updateData({ name, email })
    nextScreen();
  };

  return (
    <div className="h-full">
      <form
        className="h-full flex flex-col justify-between items-center"
        onSubmit={handleSubmit}
      >
        <FieldGroup className="max-w-[400px]">
          <FieldSet>
            <FieldLegend>Personal Data</FieldLegend>
            <FieldDescription>
              We need some personal data to reserve the room.
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" placeholder="John Doe" required value={name} onChange={(e) => setName(e.target.value)} />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" placeholder="johndoe@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </Field>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
        <div className="w-full max-w-[450px] flex justify-between">
          <Button
            className={`w-[120px] bg-black text-white cursor-pointer hover:bg-gray-700`}
            onClick={previousScreen}
          >
            PREVIOUS
          </Button>
          <Button
            type="submit"
            className={`w-[120px] cursor-pointer bg-blue-500 hover:bg-blue-400`}
          >
            NEXT
          </Button>
        </div>
      </form>
    </div>
  );
}
