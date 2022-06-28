export const queries = {
    getAllProveedores: 'SELECT * FROM [T_Proveedor]',
    AddNewProveedores: 'INSERT INTO T_Proveedor (Id_Proveedor, Nombre_Proveedor,N_Identificación,Dirección,Cantidad_Vehiculos) VALUES (@Id_Proveedor,@Nombre_Proveedor,@N_Identificación,@Dirección,@Cantidad_Vehiculos)',
    getProveedorById: 'SELECT * FROM [T_Proveedor] Where Id_Proveedor = @Id_Proveedor',
    deleteProveedor: 'DELETE FROM [T_Proveedor] where Id_Proveedor = @Id_Proveedor ',
    updateProveedoresById: 'UPDATE [T_Proveedor]  SET Id_Proveedor = @Id_Proveedor,Nombre_Proveedor = @Nombre_Proveedor, N_Identificación = @N_Identificación, Dirección = @Dirección,  Cantidad_Vehiculos = @Cantidad_Vehiculos where Id_Proveedor = @Id_Proveedor',
    // Transporte
    getAllTransporte: 'SELECT * FROM [T_Transporte]',
    AddNewTransporte: 'INSERT INTO [T_Transporte] (Id_Proveedor, Placa_Vehiculo,Marca,Modelo,N_Identifición_Conductor, Nombre_Conductor, Estado) VALUES (@Id_Proveedor,@Placa_Vehiculo,@Marca,@Modelo,@N_Identifición_Conductor, @Nombre_Conductor, @Estado)',
    getTransporteById: 'SELECT * FROM [T_Transporte] where Id = @Id',
    deleteTransporte: 'DELETE FROM [T_Transporte] where Id = @Id ',
    updateTransporteById: 'UPDATE [T_Transporte] SET Id_Proveedor = @Id_Proveedor,Placa_Vehiculo = @Placa_Vehiculo, Marca = @Marca, Modelo = @Modelo,  N_Identifición_Conductor = @N_Identifición_Conductor,  Nombre_Conductor = @Nombre_Conductor, Estado = @Estado where Id = @Id'

}