import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return ( 
    <Card>
      <CardContent className="p-5 flex flex-row justify-between py-0">
        <div className="flex flex-col gap-2 py-5">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">Confirmado</Badge>
          <h2 className="font-bold">Corte de Cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src="https://github.com/dreeilima.png" />
              <AvatarFallback>DL</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Vintage Hair</h3>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center px-3 border-l border-solid border-secondary">
         <p className="text-sm">Fevereiro</p>
         <p className="text-2xl">15</p>
         <p className="text-sm">09:45</p>           
        </div>

      </CardContent>
    </Card>
   );
}
 
export default BookingItem;