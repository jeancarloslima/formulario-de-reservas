import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function StepPersonalData() {
    return (
        <div>
            <form>
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