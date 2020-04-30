<template>
    <div id="customer">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">Customers</div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">SL</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Total</th>
                                    <th scope="col" class="text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="(customer, index) in customers" :key="customer.id" >
                                    <th scope="row">{{ index+1 }}</th>
                                    <td>{{ customer.name }}</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                customers: []
            }
        },
        mounted() {
            console.log('Component mounted.')
            this.getCustomersData();
        },
        methods: {
            getCustomersData(){
                axios.get('/laravel-ajax-crud/api/customers')
                .then(response=>{
                    this.customers = response.data.data
                })
                .catch(e=>{
                    console.log(e)
                }) 
            }               
        }
    }
</script>
