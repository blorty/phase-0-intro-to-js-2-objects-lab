// Write your solution in this file!
const employee = {
    employee1: {
        name: "Zaddy",
        streetAddress: "1738 St Nw, Wop City, North Dakota"
    }

}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const cloneEmployee = {...employee};
    cloneEmployee[name] = streetAddress;
    return cloneEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    employee[name] = streetAddress;
    return employee;
}

function deleteFromEmployeeByKey(employee, name, streetAddress) {
    const cloneEmployee = {...employee};
    cloneEmployee[name] = streetAddress;
    return cloneEmployee;
}
    const newEmployee = deleteFromEmployeeByKey(employee);

function destructivelyDeleteFromEmployeeByKey(employee, name, streetAddress) {
    employee.name = name;
    employee[name] = streetAddress;
    return employee;
}