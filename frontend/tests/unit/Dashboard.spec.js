import api from '@/PizzaVotesApiService';
import { shallowMount } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard.vue'

jest.mock('@/PizzaVotesApiService');

const mockUserRecord = {
    id:"percy.pig@mns.local",
    value:0,
    dateTime:"2023-10-30T13:30:02.415"
};

api.getById.mockResolvedValue(mockUserRecord);

async function mountComponent() {
    return shallowMount(Dashboard, {
        propsData: {
            user: {
                email: "percy.pig@mns.local"
            }
        }
    });
}

describe('Dashboard.vue', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    describe('created hook', () => {
        it('calls api.getAll', async () => {
            await mountComponent();
            // TODO: add an assertion
            fail('Oh no an error')
        })
    })
    describe('addVote', () => {
        it('increments value correctly', async () => {
            const component = await mountComponent();
            await component.vm.addVote(mockUserRecord.id, 'UP');
            
            expect(api.create).toHaveBeenCalledTimes(1);
            expect(api.create).toHaveBeenCalledWith(
                expect.objectContaining(
                    {
                        Value: mockUserRecord.value+1
                    }
                ));
        })
        it('calls getById', async () => {
            const component = await mountComponent();
            await component.vm.addVote(mockUserRecord.id, 'UP');

            // TODO: add an assertion
            fail('Oh no another error')
        })
    })
})
