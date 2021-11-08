import {FaTrash} from "react-icons/fa";
import {FaEdit} from "react-icons/fa";

const Table = ({data, setdata}) => {

    function remove(index){

        let newdata = [...data];
        newdata.splice(index, 1);
        setdata(newdata);
    }

    function edit(index){

        let newname = prompt("Enter your name", data[index].name);
        let newfamily = prompt("Enter your family", data[index].family);
        let newemail = prompt("Enter your email", data[index].email);
        let newphone = prompt("Enter your phone", data[index].phone);

        let user = {
            name: newname,
            family: newfamily,
            email: newemail,
            phone: newphone,
        }

        let newdata = [...data];
        newdata.splice(index, 1, user);
        setdata(newdata);
    }

    return(

        <table className="table text-right">
            <thead>
                <tr>
                    <th scope="col" className="text-center">حذف</th>
                    <th scope="col" className="text-center">ویرایش</th>
                    <th scope="col" className="text-center">#</th>
                    <th scope="col" className="text-center">نام</th>
                    <th scope="col" className="text-center">نام خانوادگی</th>
                    <th scope="col" className="text-center">ایمیل</th>
                    <th scope="col" className="text-center">تلفن</th>
                </tr>
            </thead>

            <tbody id="tbody">

                {
                    data.map((item, index) =>(
                        <tr>
                            <td scope="col" className="text-center" onClick={()=> remove(index)}><FaTrash/></td>
                            <td scope="col" className="text-center" onClick={()=> edit(index)}><FaEdit/></td>
                            <td scope="col" className="text-center">{index}</td>
                            <td scope="col" className="text-center">{item.name}</td>
                            <td scope="col" className="text-center">{item.family}</td>
                            <td scope="col" className="text-center">{item.email}</td>
                            <td scope="col" className="text-center">{item.phone}</td>
                        </tr>
                    ))
                }
            
            </tbody> 

        </table>

    )


}

export default Table;