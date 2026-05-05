import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useReservationStore } from "../../contexts/useReservationStore";

export default function StepPersonalData() {
    const updateData = useReservationStore((state) => state.updateData);

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>Personal Data</FieldLegend>
                        <FieldDescription>We need some personal data to reserve the room.</FieldDescription>
                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="name">
                                    Name
                                </FieldLabel>
                                <Input id="name" placeholder="John Doe" required />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="email">
                                    Email
                                </FieldLabel>
                                <Input id="email" placeholder="johndoe@gmail.com" required />
                            </Field>
                        </FieldGroup>
                    </FieldSet>
                </FieldGroup>
            </form>
        </div>
    )
}